import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props) => (

   <ContentLoader
        className={'Main'}
        speed={2}
        width={1340}
        height={500}
        viewBox="0 0 1340 500"
        backgroundColor="#c4c4c4"
        foregroundColor="#db1f1f"
        {...props}
    >
     <rect x="86" y="-43" rx="0" ry="0" width="500" height="10" />
     <rect x="5" y="-9" rx="0" ry="0" width="1340" height="10" />
     <rect x="4" y="11" rx="0" ry="0" width="1340" height="10" />
     <rect x="45" y="45" rx="0" ry="0" width="0" height="1" />
     <rect x="5" y="30" rx="0" ry="0" width="1340" height="10" />
     <rect x="3" y="51" rx="0" ry="0" width="1340" height="10" />
     <rect x="4" y="71" rx="0" ry="0" width="1340" height="10" />
     <rect x="3" y="91" rx="0" ry="0" width="1340" height="10" />
     <rect x="3" y="107" rx="0" ry="0" width="1340" height="10" />
     <rect x="5" y="125" rx="0" ry="0" width="1340" height="10" />
     <rect x="7" y="142" rx="0" ry="0" width="1340" height="10" />
     <rect x="4" y="162" rx="0" ry="0" width="1340" height="10" />
     <rect x="5" y="181" rx="0" ry="0" width="1340" height="10" />
     <rect x="5" y="199" rx="0" ry="0" width="1340" height="10" />
     <rect x="5" y="216" rx="0" ry="0" width="1340" height="10" />
    </ContentLoader>

)

export default Skeleton
