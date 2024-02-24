import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";


export const Model = () => {
    const params = useParams()
    const currentModel=adidasArr.find( el=>el.id=== Number(params.id))
  return(
      <div style={{textAlign: 'center'}}>
          {currentModel
              ? <>
                  <h2>{currentModel.model}</h2>
                  <h3>{currentModel.collection}</h3>
                  <h4>{currentModel.price}</h4>
                  <img
                      src={currentModel.picture}
                      alt={currentModel.model}
                      style={{width: '600px', height: 'auto', marginRight: '10px'}}
                  />
              </>
              :
              <h2>Not found Model</h2>
          }
      </div>
  );
};

