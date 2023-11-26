import React, {useState} from 'react';
import '../Css/form.css'
const Element=()=>{
    const [formData, setFormData]=useState({
        Ad:'',
        Soyad:'',
        Telefon:'',
        Email: '',
        Şərh: '',
        Göndər: '',
    });
    const[successMessage, setSuccessMessage]=useState(null);
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!formData.Ad || !formData.Soyad || !formData.Telefon || !formData.Email || !formData.Şərh) {
            alert('Bütün sahələr tələb olunur');
            return;
          }
          setSuccessMessage('Təqdim edildi');
    };

    return (
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Ad:</label>
              <input type="text" id='name' name="Ad" value={formData.Ad} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='surname'>Soyad:</label>
              <input type="text" id='surname' name="Soyad" value={formData.Soyad} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='phone'>Telefon:</label>
              <input type="text" id='phone' name="Telefon" value={formData.Telefon} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email"id='email' name="Email" value={formData.Email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='comment'>Şərh:</label>
              <textarea name="Şərh" id='comment' value={formData.Şərh} onChange={handleChange}></textarea>
            </div>
            <div className='form-group'>
              <button type="submit">Göndər</button>
            </div>
          </form>
          {successMessage && <p className='success-message'>{successMessage}</p>}
        </div>
      );
    };
    
    export default Element;