import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DefaultPage = () => {


    return (
        <section className="h-screen w-full flex justify-center items-center">
            <div className="h-[80%] w-[80%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">

                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
                    <p className="text-lg mb-4">
                        Looks like you've taken a wrong turn. Don't worry, even the best get lost sometimes.
                    </p>
                    <p className="text-lg mb-4">
                        Let's get you back on track. You can go to the <Link to="/" className="text-blue-500 underline">home page</Link> or try another route.
                    </p>
                    <p className="text-lg mb-4">
                        In the meantime, here's a joke for you:
                    </p>
                    <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
                        Why did the React developer go broke?
                        <br />
                        Because he lost his state!
                    </blockquote>
                </div>

            </div>

        </section>
    )
}

export default DefaultPage;