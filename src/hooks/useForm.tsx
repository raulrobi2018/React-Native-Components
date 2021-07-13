import {useState} from 'react';

//Se configura el useForm para que reciba los parámetros de tipo Generico
//La T es una convención, pero se puede utilizar otra letra
export const useForm = <T extends Object>(formulario: T) => {
  const [form, setState] = useState(formulario);

  //El keyof T le dice que lo que se reciba en campo tiene que estar
  //en los campos enviados en el useForm()
  const onChange = (value: string, campo: keyof T) => {
    setState({
      //
      ...form,
      //Al estar entre parentesis recto estoy computando el atributo que está en el valor de campo
      //O sea, seteará el valor del campo que venga dentro de ese parámetro
      [campo]: value,
    });
  };

  return {
    ...form,
    form,
    onChange,
  };
};
