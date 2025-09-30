type TitleProp = {
    title: string
}

const ReusableH2= ({ title }: TitleProp) => {
    return (
        <h2>{title}</h2>
    )
}

export default ReusableH2
