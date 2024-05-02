interface H2props {
    children: React.ReactNode
}
export const H2 = ({children}: H2props) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-red-600">
            {children}
        </h2>
    )
}