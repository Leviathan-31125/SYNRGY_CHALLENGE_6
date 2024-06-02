import User from "../models/User.js";
import bcrypt from 'bcrypt';

const data = [
    {
        name: 'Alfikiyar',
        email: 'alfikiyar@gmail.com',
        password: 'Ath1234',
        role: 'Admin'
    },
    {
        name: 'Haidar',
        email: 'haidar@gmail.com',
        password: 'Ath1234',
        role: 'Member'
    },
    {
        name: 'Tirta',
        email: 'tirta@gmail.com',
        password: 'Ath1234',
        role: 'SuperAdmin'
    },
    {
        name: 'Al Hadar',
        email: 'alhadar@gmail.com',
        password: 'Ath1234',
        role: 'SuperAdmin'
    }
]

export const Seed_User = async () => {
    data.map( async (newUser) => {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(newUser.password, salt);

        await User.create({
            name: newUser.name,
            email: newUser.email,
            password: hashPassword,
            role: newUser.role
        })
    })
}