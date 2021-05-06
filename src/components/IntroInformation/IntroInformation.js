import React from "react";

const IntroInformation = () => {
    return (
        <div className="w-105-screen h-full flex flex-col overflow-y-auto pb-3">
            <img
                className="mx-auto p-8 max-w-xxs"
                src="assets/img/undraw_fill_form.svg"
                alt="fill form illustration"/>
            <div className="flex flex-col w-full items-start px-4">
                <h2 className="mt-2">Salut!</h2>
                <h4 className="text-left mt-0">
                    Nu iti mai face griji ca ai uitat declaratia pe proprie raspundere
                </h4>
                <h4 className="font-semibold">
                    Genereaza una, pe loc!
                </h4>
                <p className="text-left mt-2">
                    Completeaza acum informatiile necesare pentru ca, ulterior, sa poti genera declaratia pe propria
                    raspundere prin simpla apasare a unui buton.
                </p>

            </div>
        </div>
    );
}

export default IntroInformation;
