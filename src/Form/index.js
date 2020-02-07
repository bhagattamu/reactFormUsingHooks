import React,{useState} from 'react';

export const Form = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState(0);
    const [address,setAddress] = useState('');
    const [pnumber,setPhoneNumber] = useState(0);
    const formObject = {
        name:{
            element:'input',
            type: 'text',
            placeholder:'Enter name',
            value: name,
            require: true,
            handleChange: function(e){
                e.preventDefault();
                setName(e.target.value)
            }
        },
        password:{
            element: 'input',
            type: 'password',
            placeholder:'Enter Password',
            value: password,
            require: false,
            handleChange: function(e){
                e.preventDefault();
                setPassword(e.target.value);
            }
        },
        age:{
            element: 'select',
            type:'number',
            placeholder:'Select Age',
            value: age,
            require: true,
            options: [1,2,3,4,5,6],
            handleChange: function(e){
                e.preventDefault();
                setAge(e.target.value)
            }
        }
    }
    function handleSubmitForm(e){
        console.log(`The subbmited value is name=${name} and pasword=${password} and age=${age} and address=${address} and phone number=${pnumber}`)
        e.preventDefault();
    }
    function handleAddressChange(e){
       setAddress(e.target.value)
       e.preventDefault();
    }
    function handlePnumberChange(e){
        setPhoneNumber(e.target.value)
        e.preventDefault();
    }
    function fillElements(e,cb){
        let formElements = [];
        for(const property in e){
            formElements.push(cb(e[property]))
        }
       return formElements;
   
    }
    function renderOption(options){
        let i = 0;
        return options.map((option) => {
            i++;
            return(
            <option value={option} key={i}>{option}</option>
            )
        })
    }
    function fillElement(e){
            switch(e.element){
                case 'input':
                    return(
                        e.require ?
                        <input type={e.type} placeholder={e.placeholder} value={e.value} required onChange={e.handleChange} />
                        :
                        <input type={e.type} placeholder={e.placeholder} value={e.value} onChange={e.handleChange}  />
                    )
                    break;
                case 'select':
                    return(
                        e.require ?
                        <select type={e.type} placeholder={e.placeholder} value={e.value} onChange={e.handleChange}>
                            {renderOption(e.options)}
                            {/* {e.options} */}
                        </select>
                        :
                        <select type={e.type} placeholder={e.placeholder} value={e.value} onChange={e.handleChange}>
                            {renderOption(e.options)}
                            {/* {e.options} */}
                        </select>
                    )
                    break;
                default:
                    break;
            }
       
        return null;
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                {fillElements(formObject,fillElement)}
                <input type="text" value={address} placeholder="Enter address" onChange={handleAddressChange} />
                <input type="text" value={pnumber} placeholder="Enter phone number" onChange={handlePnumberChange} />
                <input type="submit" name="submit" />
            </form>
        </div>
    )
}

export default Form;