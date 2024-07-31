import { SignIn } from "@clerk/nextjs"

function page() {
    return (
        <main className="auth-page">
            <SignIn />
        </main>
    )
}

export default page