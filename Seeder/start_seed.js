import User from "../models/User.js";
import { Seed_User } from "./user.js";

// Truncate Table
User.destroy({truncate: true})
Seed_User()