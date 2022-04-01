import {  useSearchParams } from "react-router-dom";

function Detail() {
 const [searchParams]= useSearchParams()
  // const { id } = useParams();
  return <div>Detail Page {searchParams.get("id")}</div>;
}

export default Detail;