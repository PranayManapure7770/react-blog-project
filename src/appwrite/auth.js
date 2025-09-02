import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // ✅ make sure this matches your config.js
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            // Auto login after signup
            if (userAccount) {
                return this.login({ email, password });
            }

            return userAccount;
        } catch (error) {
            console.error("Error creating account:", error.message);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("Error logging in:", error.message);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Error fetching current user:", error.message);
            return null; // No user logged in
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions(); // ✅ fixed
        } catch (error) {
            console.error("Error logging out:", error.message);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
