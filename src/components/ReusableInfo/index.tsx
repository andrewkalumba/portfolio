type ReusableInfoProp = {
    text: string 
}
const ReusableInfo = ({text}: ReusableInfoProp) => {
    return (
        <p>{text}</p>
    )
}
export default ReusableInfo