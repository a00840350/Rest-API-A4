import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Details = ({ users }) => {
    const { username } = useParams()
    const [searchParams] = useSearchParams() // Para obtener los query params, si es necesario
    return (
        <div>
            Details
            <p>Valor de la variable: {username}</p>
            <p>Valor del query param: {searchParams.get("react")}</p>
        </div>
    )
}
export default Details;