import { Layout } from "../../Components/Layout";

function MyAccount() {
    return (
            <Layout>
                    <h1 className="font-medium text-xl mb-7 ">
                        My Account
                    </h1>
                    <div className="flex flex-col justify-center w-80">
                        <p className="flex flex-col mb-6 gap-1">
                            <span>Name: Efrexz</span>
                            <span>Email: zyzz_448@hotmail.com</span>
                        </p>
                        <button className="border border-black w-full py-2 rounded-lg font-medium">Edit</button>
                    </div>
            </Layout>
    )
}

export default MyAccount;