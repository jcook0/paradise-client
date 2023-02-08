import React from "react";
import { Link } from 'react-router-dom';  
import Category from "../components/Category/Category";

import {useGlobalStore} from "../store/globalStore"


export default function CategoryPage() {

  const getStateObject = useGlobalStore((state) => state)


return (
  <>
   <h1>Which of these categories are important to you?</h1>
    <p>Select from the categories below.</p>

    <Category categoryName="Health" barKey={0} startingValue={getStateObject.health}/>
    <Category categoryName="Education" barKey={1}  startingValue={getStateObject.education}/>
    <Category categoryName="Safety" barKey={2}  startingValue={getStateObject.safety} />
    <Category categoryName="Environment" barKey={3}  startingValue={getStateObject.environment}/>
    <br></br>
    <Link className="btn1 btn2" to="/results" >  Next  </Link> 

  </>
);
}