const PageContainer = ({children})=>{
    return(
        <div className="mx-auto w-full max-w-[880px] border-x border-neutral-200">
            {children}
        </div>
    )
}

export default PageContainer;