import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import ConvertToJson from "../services/convertToJson";
import { ICliente } from "../interfaces/clientInterface";
import api from './../services/api';
import { IAdminSession, ISession } from "@/interfaces/session.interface";

export default function useUtils() {

    function isTokenValid(token: string): boolean {
        if (!token) return false;
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp !== undefined) {
            return decodedToken.exp > currentTime;
        } else {
            return false;
        }
    }

    async function checkDomain(domain: string) {
        // await verificarDisponibilidaDeDominios(domain)
        const response = await axios.get(`https://www.angohost.co.ao/buscar.php?domain=${domain}`)
        const json = ConvertToJson(response.data)

        return json
    }
    // async function verificarDisponibilidaDeDominios(domain: string){
    //     const response=  (await axios.get(`https://www.angohost.co.ao/api4.php?dominio=${domain}`)).data
    //     const json = response
    //     console.log(json)
    // }


    async function getUser(): Promise<ICliente> {
        const clientID = Cookies.get('userID')
        const response = await api.get<ICliente>(`/cliente/${clientID}`);
        return response.data;
    }

    function formatDate(isoString: string | number | Date) {
        // Converte a string ISO para um objeto Date
        const date = new Date(isoString);

        // Obtém o dia, mês e ano
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        // Retorna a data formatada como dd.mm.aaaa
        return `${day}.${month}.${year}`;
    }

    function formatMoney(money: number) {
        return money.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA', maximumFractionDigits: 0 })
    }

    function formatMoneyWithoutKz(money: number): string {
        const formatted = new Intl.NumberFormat('pt-AO', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            style: "currency",
            currency: "AOA",
            currencyDisplay: "symbol"
        }).format(money);

        // Substitui os pontos por espaços
        return formatted.replace(/\./g, ' ');
    }

    function isAuthenticated(): boolean {
        const sessionCookie = Cookies.get('session');
        let session: ISession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as ISession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
                return false;
            }
        }
        return session ? isTokenValid(session.token) : false;
    }

    

    function isAdminAuthenticated(): boolean {
        const sessionCookie = Cookies.get('adminSession');
        let session: IAdminSession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as IAdminSession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
                return false;
            }
        }
        return session ? isTokenValid(session.token) : false;
    }

    function getClientID(): string {
        const sessionCookie = Cookies.get('session');
        let session: ISession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as ISession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
            }
        }
        return session?.clientId as string;
    }

    function getSessionToken(): string {
        const sessionCookie = Cookies.get('session');
        let session: ISession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as ISession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
            }
        }
        return session?.token as string;
    }

    function getAdminID(): string {
        const sessionCookie = Cookies.get('adminSession');
        let session: IAdminSession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as IAdminSession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
            }
        }
        return session?.userId as string;
    }

    function getAuthenticatedUser(): string {
        const sessionCookie = Cookies.get('session');
        let session: ISession | null = null;

        if (sessionCookie) {
            try {
                session = JSON.parse(sessionCookie) as ISession;
            } catch (error) {
                console.error('Erro ao fazer o parse do cookie:', error);
            }
        }

        if (isAuthenticated()) {
            return session?.clientType || ""
        }
        else return '';
    }

    function reverseArray<T>(arr: T[]): T[] {
        if (arr.length > 1) {
            const primeiro = arr.shift(); // Remove e retorna o primeiro elemento
            const ultimo = arr.pop(); // Remove e retorna o último elemento
            
            if (ultimo !== undefined) {
                arr.unshift(ultimo); // Adiciona o último elemento no início
            }
            if (primeiro !== undefined) {
                arr.push(primeiro); // Adiciona o primeiro elemento no final
            }
        }
        return arr;
    }
   

    return { isTokenValid, getAdminID, reverseArray, isAdminAuthenticated, getSessionToken, getClientID, checkDomain, formatMoneyWithoutKz, getUser, isAuthenticated, getAuthenticatedUser, formatDate, formatMoney };
}