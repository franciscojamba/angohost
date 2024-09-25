import { useEffect, useState } from "react";
interface propsTime{
    dias: number,
    horas: number,
    minutos: number,
    segundos: number
}

interface propsTargetDate {
    targetDate: string
}

const CountdownClockTree = ({ targetDate }: propsTargetDate) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: propsTime;

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function padWithZero(number: number) {
        return number < 10 ? "0" + number : number;
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex items-center justify-center gap-3 bg-none">
            <div className="">
                <span>{`${padWithZero(timeLeft.dias)}`}</span>
                <p>Dias</p>
            </div> :
             <div>
                <span>{`${padWithZero(timeLeft.horas)} `}</span>
                <p>Horas</p>
            </div> : 
            <div>
                <span>{`${padWithZero(timeLeft.minutos)}`}</span>
                <p>Minutos</p>
            </div> : 
            <div>
                <span>{`${padWithZero(timeLeft.segundos)}`}</span>
                <p>Segundos</p>
            </div>
        </div>
    );
};

export default CountdownClockTree;









{/* <div>
<NumContainer>{timeLeft.dias}</NumContainer>
<Label>Dias</Label>
</div>
<div>
<NumContainer>{timeLeft.horas}</NumContainer>
<Label>Horas</Label>
</div>
<div>
<NumContainer>{timeLeft.minutos}</NumContainer>
<Label>Minutos</Label>
</div>
<div>
<NumContainer>{timeLeft.segundos}</NumContainer>
<Label>Segundos</Label>
</div>
</TimeDisplay> */}