interface User {
    username: string;
    name: string;
    likes: string[];
    coolness?: number;
}

function loadUser(username: string): Promise<User | undefined> {
    const users: User[] = [
        {
            username: "m0.slah",
            name: "Muhammed Slah",
            likes: ["rice", "fish"]
        },
        {
            username: "raman",
            name: "Raman Mhedin",
            likes: ["kabab", "rice"]
        }
    ];

    return new Promise((resolve) => {
        resolve(users.find((user) => user.username.toLowerCase() === username.toLowerCase()));
    });
}

export async function userLoadData(username: string): Promise<User | undefined> {
    const user = await loadUser(username);

    if (!user) {
        console.log("no user found");
        return;
    }

    user.coolness = username.toLowerCase() === "m0.slah" ? 100 : -1;

    return user;
}
