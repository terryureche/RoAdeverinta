import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="w-105-screen h-full flex flex-col overflow-y-auto pb-3">
            <img
                className="mx-auto p-8 max-w-xxs"
                src="assets/img/undraw_terms_n_conditions.svg"
                alt="fill form illustration"/>
            <div className="flex flex-col w-full items-start px-4 text-left">
                <h2 className="mt-6 text-xl">
                    <span className="underline-warning">
                        Toate datele sunt stocate pe propriul dispozitiv
                    </span> <span>
                        si siguranta lor este garantata de sistemul
                    de operare al dispozitivului
                    </span>
                </h2>
                <div className="mt-4">
                    Prin continuarea folosirii aplicatiei inseamna ca sunteti de acord cu urmatorii Termeni si Conditii:
                    <ul className="list-disc mt-2 list-inside">
                        <li>
                            Dezvoltatorii aplicatiei curente nu își asumă nicio răspundere referitoare la furnizarea eronată a informațiilor solicitate pe baza cărora este generat documentul solicitat.
                        </li>
                        <li>
                            Datele introduse in aplicatie sunt folosite strict pentru generarea documentului solicitat si siguranta lor este oferita de sistemul de operare al dispozitivului folosit de utilizatorul aplicatiei.
                        </li>
                        <li>
                            Dezvoltatorii aplicatiei nu isi asuma nicio raspundere referitoare la validitatea documentului generat la data solicitarii acestuia.
                            Utilizatorul trebuie sa se asigure ca documentul generat este in conformitate cu legislatia in vigoare la momentul folosirii aplicatiei.
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}


export default TermsAndConditions;
