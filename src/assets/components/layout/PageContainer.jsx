const PageContainer = ({children})=>{
    return(
        <div className="mx-auto w-full max-w-[580px] border-x border-neutral-200">
            {children}
        </div>
    )
}

export default PageContainer;