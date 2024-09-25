import { useEffect, useState } from "react";
import styled from "styled-components";

const NumContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border-radius: 0.7rem;
    background: #23679a;
    color: white;
    font-size: 0.9rem;
  }

`;

interface propsTime {
    dias: number,
    horas: number,
    minutos: number,
    segundos: number
}

interface propsTargetDate {
    targetDate: string
}


const CountdownClock = ({ targetDate }: propsTargetDate) => {
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
        <div className="flex items-center h-full justify-center gap-1 text-[#23679a33] font-semibold text-[1.3rem]">
            <NumContainer>
                <span>{`${padWithZero(timeLeft.dias)}`}</span>
            </NumContainer> :
            <NumContainer>
                <span>{`${padWithZero(timeLeft.horas)} `}</span>
            </NumContainer> :
            <NumContainer>
                <span>{`${padWithZero(timeLeft.minutos)}`}</span>
            </NumContainer> :
            <NumContainer>
                <span>{`${padWithZero(timeLeft.segundos)}`}</span>
            </NumContainer>
        </div>
    );
};

export default CountdownClock;









{/* <div>
<span>{timeLeft.dias}</span>
<Label>Dias</Label>
</div>
<div>
<span>{timeLeft.horas}</span>
<Label>Horas</Label>
</div>
<div>
<span>{timeLeft.minutos}</span>
<Label>Minutos</Label>
</div>
<div>
<span>{timeLeft.segundos}</span>
<Label>Segundos</Label>
</div>
</TimeDisplay> */}