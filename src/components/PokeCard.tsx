import { Link } from "react-router-dom"
import type {Poke} from "../types/Poke"
import { Card, Title,Image, Info } from "./PokeCard.styles"

interface Props{
    poke:Poke
}

export function PokeCard({poke}:Props){
    return(
        <Card>
            <Link to= {`/poke/${poke.name}`}>
                <Image src={poke.front_default}/>
                <Title>{poke.name}</Title>
                <Info>{poke.description}</Info>
            </Link>
        </Card>
    )
}