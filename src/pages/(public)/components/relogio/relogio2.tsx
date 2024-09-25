import { useEffect, useState } from "react";
import styled from "styled-components";

const NumContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    p {
    font-weight: 400;
    font-size: 0.8rem;
    }

  span {
    display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 0.7rem;
    background: #ffffff22;
  }

`;

interface propsTime{
    dias: number,
    horas: number,
    minutos: number,
    segundos: number
}

interface propsTargetDate {
    targetDate: string
}

const CountdownClockTwo = ({ targetDate }: propsTargetDate) => {
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
        <div className="hidden sm:flex items-center h-full mt-3 justify-center gap-3 text-white font-semibold text-[1.3rem]">
            <NumContainer>
                <span>{`${padWithZero(timeLeft.dias)}`}</span>
                <p>Dias</p>
            </NumContainer> :
             <NumContainer>
                <span>{`${padWithZero(timeLeft.horas)} `}</span>
                <p>Horas</p>
            </NumContainer> : 
            <NumContainer>
                <span>{`${padWithZero(timeLeft.minutos)}`}</span>
                <p>Minutos</p>
            </NumContainer> : 
            <NumContainer>
                <span>{`${padWithZero(timeLeft.segundos)}`}</span>
                <p>Segundos</p>
            </NumContainer>
        </div>
    );
};

export default CountdownClockTwo;









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