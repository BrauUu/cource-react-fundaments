export default function WithProps(props) {
    const status = props.grade >= 6 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                A nota do(a) <strong>{props.name}
                </strong> é <strong>{props.grade}</strong>. <br />
                Portanto o aluno foi <strong>{status}</strong>
            </p>
        </div>
    )
}