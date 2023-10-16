import React from 'react'
import './Landscape.css'
import { useState } from 'react'
import { icon, plan,content, faqs} from './Data'
import {TbWorld} from 'react-icons/tb'
import{FcNeutralTrading} from 'react-icons/fc'
import {SiGoogletranslate} from 'react-icons/si'
import{BiDollarCircle} from 'react-icons/bi'
import{BsRobot} from'react-icons/bs'
import { trade } from './Data'
import { Slide } from '@mui/material'
import Slider from './Slider'
import Question from './Question'




const Landscape = () => {
  return (
    <div className='Parent'>
        <div id='childern'>
        <div className='child1'> <p><span id='icon'><TbWorld/></span></p></div>
        <div className='child2'>  <p className='head'><span id='text'><b>Global</b></span> <span id='text1'><b>FXPro</b></span></p></div>
        
        <div className='chil3'>
        <center><button id='button2'>Home</button> <button id='button1'>  About</button><button id='button1'>Plans</button><button id='button1'>Contact</button></center>
        </div>
        <div className='chil4'>
           <button id='login'>Login</button><button id='signup'>Sign Up</button>  <button id='gg'><SiGoogletranslate/></button>
        </div>
        </div>
        <div className='content'>
        <center>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1><span id='hh'>Global</span> <span id='hhh'>FXPro</span></h1>
        <p className='para'>Your success is our priority <span className='color'> - trade with confidence <br />
        succeed with ease.</span></p><br /><br />
        <button id='login1'>Login</button><button id='signup2'>Sign Up</button>
    </center>
        </div>

        <div className='content2'>
            <br /><br />
        <center> <h1>How we do <span id='color2'>think?</span></h1></center>
        <br /><br />
        <div id='no2'></div>
        
        {
            trade.map((item)=>{
                return(
                    <div id='no1'>
                       <center> <button id='ic'>{item.icon}</button>
                    <h2 id='cc'>{item.head}</h2>
                    <p id='tx'>{item.para}</p></center>
                    </div> 
                )
            })
        }
        
        <div id='no2'></div>
        <center> <h1>Plans<span id='color2'> & Pricing</span></h1>
        <p className='para'>Whether your time-saving automation <span className='color'> needs are large or small, we’re <br />
        here to help you scale.</span></p></center>
        <div id='no4'></div>
      <center>      <div className='plansparent'>
      {
            plan.map((item1)=>{
                return(
                    <div id={item1.third} className='no3'>
                       
                        <h1>{item1.price}</h1>
                        <h2>{item1.property}</h2>
                        <p>{item1.text}</p>
                        <p>{item1.icon}{item1.n1}</p>
                        <p>{item1.icon}{item1.n2}</p>
                        <p>{item1.icon}{item1.n3}</p>
                        <p>{item1.icon}{item1.n4}</p>
                        <p>{item1.icon}{item1.n5}</p>
                        <button id='butt'>{item1.button}</button>
                        
                    </div> 
                )
            })
        }
        
      </div>
      </center>

          <div id='no4'></div>
        <center> <p id='he'><br />Users Testimonials <br />
        <p className='para1'>Discover early user’s feedback on<span className='color1'> Dico integration within <br />
        their workflows.</span></p></p></center>

        <div>
            <center>
            <div className='slider'>
                <Slider/>
            </div>
            </center>
        </div>

        <center> <h1 id='hee'>Our Value <span id='color2'> Record</span></h1>
        <p className='para1'>Discover early user’s feedback on<span className='color1'> Dico integration within <br />
        their workflows.</span></p>

        </center>
          <center>
          
       
        <div id='no21'>
            <div id='noo'></div>
        {
            
            icon.map((item)=>{
                return(
                    <div id='no11'>
                       <center> <button id='ic'>{item.icon}</button>
                    <h2 id='cc'>{item.name}</h2>
                    <p id='tx1'><b>{item.Number}</b></p></center>
                    </div> 
                )
            })
        }
        <div id='noo'></div>
        </div>
        
        </center>
    <div>
        <center> <h1 id='hee'>Why Choose <span id='color2'> us?</span></h1>
        <p className='para1'>Discover early user’s feedback on<span className='color1'> Dico integration within <br />
        their workflows.</span></p></center>
        </div>

<br /><br />

        <div className='n1'> </div>
        <div id='n3'>
                <center>
                        <div id='n2'>
                        <img id='ii'  src='https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.webp?b=1&s=170667a&w=0&k=20&c=-NS-UpGTyoqtXvSGo-JdV6diyOAncEktS7o4HZMN93w='/>
                            </div>
                        <div id='n2'>
                            <br /><br /><br /><br />
                        <h1><b>Expert Team:</b></h1> 
                        <p>Our team of skilled traders, analysts, and technical experts are at the forefront of the forex industry. They continuously monitor market trends, analyze data, and develop robust trading strategies to keep our clients ahead of the curves</p>
                        </div>
                        </center>
            </div>     
            <div className='n1'> </div>
            <div id='n3'>
                <center>
                       
                        <div id='n2'>
                            <br /><br /><br /><br />
                        <h1><b>Personalized Support:</b></h1> 
                        <p>Our dedicated customer support team is available 24/5 to assist our clients with any inquiries or issues they may encounter. We take pride in delivering prompt and attentive support to enhance the overall trading experience.</p>
                        </div>
                        <div id='n2'>
                        <img id='ii'  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVEhUYGBIYEhgYGBgZGBISGBISGBgZGhgYGRkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCw0NDQ0MTQ0NDQ0NDYxNDQ0NDQ0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEIQAAIBAgMEBwQIAwgDAQEAAAECAAMRBBIhBTFBUQYTImFxgZEyUqGxBxQjQnKSwdFi4fAVJDNTc4KiskNjg/EW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhEjFBUQRhIoEUMnET/9oADAMBAAIRAxEAPwDDpT7f/wBiPVY1E0/+Y/4vDMnbv/7aZ/MtonV6H8NQejRbOhIGd1DMpOozfG1pM4BGnf8AIGNp0lOJdWFw1P0uBBMVRyEKpPthTfvjqNqyTyVJpoFZdZKixWQ3Nxx5GPVZmNFEgpXgtfCm9xLKgJNVTSJdFHFNDNkbRdDkcXWWmIcE3Eq6drd8KR9IrVsZOkELJ6VPW8r+stLPAm81CuWizwlVRvljWw6VUsZVrhxxhb11prpuEKVE27H7N2CqPmQG3GwJl2iFvZRj5QXo/tRXNgew3HkZsEwxVbhhKJJojO1LZnfqj+43wjThXvbIfUTTq4tqRImwgbtZz6iFRQjvwZ76nUuBk394sISux6vur6n9pZrUCuFLAwzEYoKtwRDxMmZavhXRrOADbS2shKaiHYjEGoxJINhwkJp6iJJUFbJcFs9ql8pAA5i9zaOr7LdWAzJY8bcYfsdsuYHn+ghGOqKcpPPlGoBVDY7++v5Yv9iP74/KJarik7/SJ9bXkfQwUGyr/sM/5h9BFbYAsftG3d37S1XFL7rekSpigFPZbceE1BsqaGwVKgs7k+IEbjdgIEYh3DAXBvLbD1zlByNukG0sQerbsNug4o1mZw1ElhztLN8NcAd4v4cY3AJ2x+GWjpFa0FAe2DeiwX2ctvhMVsXZKpVBOptfXWbzFp9gfCZvDuEcsdwAgk/yVjxWmkUnS9W65RfTqxpKOnodJbbYxPXV2ZfZAAHlBUwhJiSkrOiEWkh9FjyhF+6E4fDW3wrqV5SLaLUzHuOP8FBvjaPKdoj+OoPUXhD7OcrZSrHqVTQjVlN5I2DfOTkJHWX8ilj8Ze0QKhB/eUsL5qQ+U0GxdlIXL1VHt3A3gcpFgdjsXR3FstMLbv4zTYbDASik6SRCUVybCUwVFvuD0EixXRmg49gA8xoYSiWhVJpSL9kna6ZiNo9FXp9qn2l5Hf5GUzqdQRYjgdLT1tGDaGUm3ejyuM6Cz8+fcZpY09oeGdrUjzF7gyRKtoVtHCMjEMLEQC0SizZz1pY7PxMqKiyfCNNJaNFmpXF3GnCWGBZKqFSdd1jKzo9TBN2moqbESol6RyVNLEaa9/OKhZNIx2H2Ri6OIDUUd6ZbcASCJ7BhaB6pQ+jZTcXiYDBZKah9WCi/eQNYWiqQCDcEXHhKLRKUnLsETCLb+Zh9GmoW0hqqBGYhwo1msXohbDr1gaw/q0mxNAEHsiQjEpdRxvC3p31uZrBVoztRVpB3qWRFUsxJAAUbyTPOdudPKjsUwlkpi4zsLu/eoOiDxF/CXX0t7RKImHRjdznf/TT2R5t/1nmmz8KXe33Rv/r+t8DrbZWEeki3wNV6rhndnfMDdmqOw/i36fCF4LpLiaFQharEBtVcEg/iU/8A73y72TRRVAVAP184Xtro6ldC69iqq9lhxPAHmJFZbl1o6pYUo77Nb0Y6SpilsQEqqLlb3DD3kPEd28S+V5470ZxWUBx2KlNwr9zXsPEEkf8AKeobDqMaIaobksTfnc/zlrOOSotVMSqeyfCLaMqDsnwhFG9cEp52NlUXJ5CM2jrTbvErOlN/qFe2/qGt42hVN82GQ8cig+I0MAbBcGgDgccvw0li4mf2Riesx1cD2KVNEH42JZvkvpNC9tYPAQPa1UJQHfYTFYxyQx5zY7dwpegtjYixmPbDP2xa+Xf4WvIZU+R1YHFLfZVYBe0T3y26ob4HhU4ywVpGXZ0roVZJaIoj8sxjCbKw1V7FjYec1OEwwWD4dLboYrTpbs4W2GIwElFWBrJ6VO8KFdBFNyYXTvGUaVpOsrFE5NEyGFUq3AwMGPSOtEmrKvpPsVaqFlHbG4/pPM8RQdGKuLfIz2ZTcWO6Um2NiJUBuIGrKQlWmeWtJcMRaP2zs56D2N8hOh/SV6VIrRZSNv0eAK6TQbJxTDEJT51B6DU/KYXYe0sjDxmnwu1cuJSogHZVw+hN1su7ke+TemGTpHqLv2bzNbI2mA2Kokm9Fy6X/wAt+1YeDEjwtCOj2PNWjQY73pu58L6fOYXppiHw+OZqZK56YzfxoRqvwHpHs5pPyegbXr3amubKWqqN+8Kpci3+2M2nVOQknQWN/MTFdIdps9bCumbIKbVuQtkGhPeDaFPtYPgnVWzOyJ5ZwGAHhe0CYrl2XhqjKjg6sbjwMucJiswt3TNZG6xEKmy0wAbHfcX/AEhWPxwpq4W4qCi7AfhU6xgo8j6Y7UOIxVape6Byif6aXA9SCf8AdJNhUGWl1gRnuSbBglhuuTe4mcc6W/rdaegdHcatJEBFyaai3vHLuk8zqKO3Ark/pDNk4msagQgkMLqGyMV7s66Hz1luvSHI5pVcioLgsVqVCADxy2C+sZsvaNqo61GBLXGRCVUcBccfSWWIND6zlankzDMrjTP7ysOfzEgnu6LyXgw+IqZMZXRSMr0idNRfLnUjym92VtrLhy7exQpvWbvJAKL6s35RPP8AbhH9ouE9nsDlplF/gTC8TjWXCOq+zVRFJ3ZcpZiO/gDOhdI5JrTPZcJXzpTc/fVT6reS1vZPhKjo7iA9DDlfZFEEc9AFv84XtnaK0VQtueqieBfQfG0YjZW9K8eqYV1tcuqJbTQOwQN4AwFNs/3OoyizpTdtd2ZSVPiLj4zM/SWjrUom/wBmoZRqfvEMoPO1jbwkWys2JQUQcuauUf8AioPao4+FrxWa9mm+j/BsKD1ahJqVyXJ4kHcfmfOWuxNoK6sGP2il1YHfmQ5W/Q+DCWOBRVzIoACoAAOA1t8pkdpk4bFLU3UazjMfupWHZJPLMuh8uUD1Q6NFiMaGoNzRlVvwkKwPofhM0+MC1Kya5zTBHLcYJgtqDra9Jjo1FV8alLMpPmPlK2piScQx3/ZoT3nKD+sSbtj417C0a0JQ3gbMWhdEWEiztTYXSkuWQo0mBihspKZhVIQWnDsNTnSkcLYTRpXh9OnaR0VtCUMtGNEZSsUCOAirHxhRAI5YkVRCAnWPtGLJFmMUe3tjpVQgjeJ5li9iOlVae/OTbuUbyZ7WVuLSi2ts4HtAdoKbHleLO0rQ+N/kk+jy3CUFDVAXs9JS1t2YDxl90QculZzvNTKLncAt7fGZXbTO1d+zkbL2gOIA1+U0fQ+p/d233687rbiokpL8bY05bo9P6GYXJQRnOiYdE7gRdnPxX0mS+kXZxHU4ks2aozqQdQq2LIqjgbBrw87fRMClNTetiawpKv3grPkdvAJf4S+6cU0fBvr2kyuvcV3/AAJHnGj/AFFkldI81xGKcUKPWC9sIxVhftqSRqPeFgIB0WdqbuKiscrUyV49hg2Wx7pDRxTNUpITdNFQadlWfMw9bybaLMazilfPVr5E0tyXh3zeaOdnsexsalcM9OzKpCZhqDUIzOAeNrgeIMXpLhqa0atZlBZcO4vyUqbjwg2FOG2fhURnC00sGdvvVGN2JtzN5hPpC6Wh1fD4aslSjVCMxUktTtfMmnA2Q/mEcvFHnFZfh/Rl7s2t1tPqySHWwupswtpcH09JR11ICg7yLnuFrCE4HOtTOntBb+I1uD5QTVxL45VL/Tc7ETCkjrBUSqNCVeotzYi4uTvuNxk21ro4d6hNFTnXPq9NFHFyASS2liN19++M2HtINZmpAuN5yjd4zKdNttPWqlPZprayjiebHjIRi5aLzajtFcmMz4l6p0zMxHcLEKPS0Po1S9B0H4x/tIBH6+Uq9n0QwOvaGY2PLLofWXuyqGVQxFuxb8xOp88t/GWaSOdW07+z0X6Osez02DKBkCU0A3KiIOPMkkyD6VcVlwyAXBNcFWH3WVWPrx8onQ6p9W+zqMO0pc+JNjY8tID9Iadbhy9NmdUqhiOCqwy3Hgbepg5Igroj6c44VsDhq9h9oq+IewNv+0z/AEW2kKVVHcnKHfTff7MgfGwgg2g9XC08MbZaRcqb6sS1xfwBIj9qYLq6iKh300a+7tMCvzEDaGo9X6N4vrXxNRdUNRUQ81VF3eZaEY/BLWoVKb7mU2PusNVI8DaM6HYYJhkAFsyBm72YXMtsQmhA4zJasKPHWRHen9yo9Nwz30NRRYXHDd55pDgbh7cbAQR2dKhQ6EO6kHgScraeUsNnKBU15Aycui0FtF2iaCSRhqRFJMidmglGkueCiOzwULYNhkvLailoJhE0h6idsYnnykSK0ejSK8VWjXQtWFK0lBkCCEKIbNQslQSO8ehmMTKJJaRpJhMAQTnphhYx1oohAZjF9CMK7l3V8xBBs5W9/CPwHQ/DUlKoHClg2rse0BaaMxIjXgfspF6K4cOlQZ+spewc7WXUnduO8y0xWFFRGSozFHUqwuBcHfqBCJ0FIxn6PQ3BoysEbMvs3eobfGZnpoMPgmpHD0/72WaorM7stMXsXKFrMzEkC+mh5T0aeQfSbrjjfd1FMD8N3/XNDFbNSKnH7ZxGJAXEVXcA3CnKqg8wqgC/faVr02Hsk2iBSNRr3ftDKDhhpv4iVoF0AB7m7XM2/R3Zi1KAroO0MyVF39ng3kCAe63IzJvR1PK/mCeHxmw+jrFFaj0gd6h1HMjst8CvpM4JpoyyOLtBmREViN2gAGpJ3AAcSTwmM6XYM06tNWFn6hWcb7MzO2XxAsJ67hMPQXEMqpaoUDqTqLffFO+61xu58hPPPpHof3rN71Jbf7Sf3MSGLjd9jZM/NpLox2GuDccP6/rxmpwuNGRHIICMFe3FTuOvEG2ncO8TKsDrbz9ZpOj3bKD7odajLa4LUwbk8SLH2RvvBJBgz1bYmFR6KMVvocpuT9nmOUA8rWhtbZtJ1KOl0YWZSWsw5EXnbMwq06SIhzKlNQDp2hbfppDBFpAvZT0+i+DX2cOg8pPU2HhmbM1FC2ULci5yjcPiZZRZqARU8OqiyggWtYFhoPOKaK9/5m/eSzoBisbYOGZi7UKZcm5YqCS3MnnHf2Hhv8hL8woB9ZYzoKRrAP7Ho5cuTs8sz2+ckTZVMbltb+J/3hgigwcUNyfsqMfsdCpKizc7sfmZlHBBIO+89CMyu19m3qE9wk5x9FYT9gVA6SXPAqdSTLOhs56J80noLIkWEUzMjMKQWjmeQhosIB4aTJIlWTJCAmSTiDoZKDCAlEScpimEUQxIhMQRJdjx6H3nXjbxYAnEzyX6UXU4tLG7DDIGHLtuRfyPynrJnmn0qYBA1KuBao+ZH/iCgFDbmLkX8OUMezMwtC3hHVQUYMNx0v38JFQOst8MFZSGGhFudyd0qhWiJmuVPB1/5j+V/SFbExnUYmnVJ7K1Bm/027L/AAJlfTQmkVv20qaHfqL/ALSU9pQw4jdyPEesYU9wOFW4NgchujcVvcaHlYmef/SLhftKLcDTdfyMD8mmt6J4/rsIjE9tUKN3sml/EgA+cqen9O6UHturMp8HRv1URW9ipUeZ4KgvW5WGhBA8Tc/vL/oi4d6VgFKVEVuGZMwGbxF9ZUvTKvmH3Tv7v6+ct+j2GZ8SmQDtVQzLYZVAzdZcctDp4RJKmXi00erbN/w0HFaaqfFQAflDIPhqeVco9kaDjoBpeVG0cT1tTqkb7NG7dv8AyON6nmo+fhJSlxQYxcpUGjaqvUFOmb2YZm4Nbeq8+8/0LWZw0erJyOy3J0AQXFve9rv3jQQuk7VEGU2ewYEgsNeB14xFN3stLGtV0WZxCe8NTbffXykkyqksQVLOGJJsOrS45Npf47pebLQhNTxNgNw15nfNGTbqhZY1FXYdOvEnXlCY6868ZecXgMSXldjGGbyjqlVidIw0SdYrVjLRisOZYUjKvDNLSisMQSCkkqGDhrR6VJRIRsKUx4aQpHiEGydDHhpCghCJNYKH05OgjEEeDCBskAixoMUwgIKlZV9pgPEgRgxtL/MT8yyo25Y6GUa4dfdE5smXjKqOrFh5RuzbDFU/fT8yxwxKe+v5lmKTDrcjKNLfKSjDJ7o9JP8A7/RT+OvZseuT3l/MJmfpAwq1ME5GVnplai6glQrDOR/sLQVcMnuD0ky4RCNUFtx03jjCvkfRn8f7PI1lvstu0Dy3fvANpYU0ar0zvRyB3rvU+akHzhGAZAAWux5WJ9AJ2Rd7OR6tHYodVWdR7D2a3K/87zqDgFl4HtDxG/4WhO1qasiuoKlfulWXs8d4sN4PfrKdXsQe/wCG6V6J2el/Rpi+1WpX07LgeIKt8klt03YfVr/++mV/X4XmO+jmtlxbA8aDj0dD+k7p3tzOy4dd1PtOedUra3kC3r3QNeQJ7K0uDfxHzl10Aq5sSxG9mfLpoVsxOvDcNfCYx8SQtvvE/MSx2XtEYftm500UHKWJ4X4ePziz2h4Oj2XaG00ooSdX6t3VPvMEXMx7gNATzYDeRMx0brlr39skk6HeTc2mM6O7eb62XqnSquQXNxT1uignhfTvJvNOmN+rVN10f2Lak/wDmRu9DxnNOLdUdOGUVaZq3p3B5238YTs1Aqm5tYc+7+UpamNe/Adq3E6iQVKrNvdgO45flObmkzo4tqjQIQDojOQLhicwud+gFpaKbjUWmHu3v1Pzv+8Jw9NuLufF2P6x45fSJzxeTWs9ozPKnDoJb0V0nRF2c7VCXnERzLG3hoFnKkW04NHzUazzLDvYQ+ljABKWpU0sJHTDXmSSM3yLyrjL7pNhKhJlbh6RO+W2Fp2m7NSRaUd0nVYMjQinCKT01hKiQoJMDGQjY60URM0QNMYkERjEvEMxmUW2hu8ZVoO+FdLMd1S5st9RxtMiekx4Ux5sf2nLlxSlK0juw5YqNNmnUat5fKT5dJjv/wClqa2RBf8AEd3nEPSKudzKPBR+sT+PNjPPA2aDd4SdRpMF/a9c/wDkbysPkI016re07nxZoy+LLyxX8leEVvS2tnxlTdZcqDvsi3v53lZQrFTcGxtbwEXaP+I+v3vjYXkE7Ix4pI5JSuTZbUNpnUVBmUixvrpxgrYQH/DYMp3Buyw7uR8dIFeLnMaxXTLzYWOOGqGs67qLqBwZyLKLjS17SlesWJZjmZmLE8WZjcnzM9Q6DYVKOGFUqDUqBnY6E5NcqjkLD1MGWt9Ze9WqiW1XODl14KQOyN0nLLx1RXHh5W7POXwtUAu1Nwu8kowAHebaSJnJsCTYbtb2nqq9Ga5bNRqI9M3N0fUd1jvEgxv0etXsUC0Ko39k5HW+8gfe7xv+MWM23TQ8sUUrTPMVE12zulLlEoZQ1QuqhyFbq9QM6i2jBb/G990vqX0UOLFsSG7QJUIUzLxUNmNj32hqbBGHIWnSCWBzHS7brXYm7ceM2TLwWkJjxc3tkoc2VTbRjrxN+c4x4wz9ndq3MaeMkxWCdPbU294ar6zzmm9noWloioC8OXSCYQQ0idGONKznyyt0EYV7mXdFdJm6NTK00eEqgidMTmkPcxNDJHSD6gxhLHOkjzSQvI4KDZ5ZSW8Po0Z2GoWEKCxW7Hqh9IQtGg6LJlms1BlE3lhQWBYZJYpGQkmSrHXkZaNzRhKJBJFEjpyUGYPR1os68RjCAx/Tpb0z4iYEIJ6D05H2R8p58pgZSHQ9VHKTIJEpkqQDEqyZnCqWO4C58oxBKzbeK0FMce03hwH6+QhFeimdySSd5JJ8TqZ0S0eI6Js60aRHSWhSZ2VFF3dgqjmzGw+JhoFnpfRWpnwyBdVCBdNbaag/GUWJw70yUYcSAeBtu9RrLjbPRdaGHFXCs6VqVFc7IzIKuUjOWA0JsS3lMw/SbEOnV1SrJcXORFc5dwzDv1iSx8iuPNxf15B6VZ0a9MurX3oSvymo2N0nxeZUZ3dSQNUUuBfUhvDnKjBYEVhZHY6XILKth4DWaDB7Hp07NqXGoNzoZyznw0+ztUYzXsvl2jVB/wARz45P0Ezu1dtYtagzlHpkHeMpAG7USzZ/lKzaAuw55CRfncSCySb/ACY6xxXSJK+2FQpdwc43Aeyw4ZprNlbYV1yPYi1iDxnmrYKrWIWoQEQ3AGgB7pq9i7OyWZ2uANO/vMeK3rsGSuNsucXgAhzJrTbd/D3SKS4iuSLcJCJbilpHJbe2Q1hCdn4zKbGROIE5sYYumBq0bahUDCJWSU2ycZfQy9vcSxFgLGR9ZJa6wBzrAzIydI6R94LSeELJFwhIRRWDU4ZQEKQrZYUFhKmDU2kytKE2SxAIgaPSYxIiyS0asW8IosQzrzrwmMv05H2LeE83Vp6Z01S9Bt3s8dJ5kKL8Cv5lgbRSCdaJFaTo8F6ipyHky/vG10dADUUqGJsTuJG+x85lT8hk2u0WauJQbSpsHJJvmNwe7l5boQMUIDi65dr8BoP1jVQjlZG0csZmj1hQjHR9CoynOrMrDcykqwPEgjUfzjJwaMAIrbTrlcvX1ipFiDVqkEHhbNaECzKrDeRrb3hoZWuLwjAYnISrewfgecy7D2jQ9HKgSqp53XzIsPjabBnnnD1wp7J133Btbzm42fWdqSNU0coCf0PmLHznF8uO1L9HZ8SWnH9hbPv8JXY6p2x+A/MQt33yuxTdsfgP/acsUdoqOR6zVYaoLW5CZO+n9b5a0MTewvfQWO6/MeMvi8nPnWkW7NrHKYMHvrJVaWZzExgldYUDI6izUawPDVyjTW4DE5gJjMQttZY7Fx1jlJlIvwJNeTU1VldUTWHq9xBnGsdokmec4d4dTadOnOjpYQhhlExZ0dCMLRpMrRJ0YUmUyZJ06FCslBjrzp0IBRGkzp0xjL9Oa+XDvb3Z5P8AXG5L6Tp0zSGUmloT60/O3gAJZVK71sOuds3V1Co3bmF9eZnToEG2+wVMNBsWmVrdwM6dGAkiECOAnToUKxSY5WizowomeKG7p06YDD8CA7KCFyl1BsBcgkAib12nTpxfL7R3/EWmQFt8BxJ7Y/B+s6dOZHYNappaOw9TtWO75HnOnSkexJ9Mv8M+g8ISjzp06ThJleOvedOhQGQV6d5WOSjXESdCuwM02zMeGUaw41J06XOd9n//2Q=='/>
                            </div>
                        </center>
            </div>  

            <div className='n1'> </div>
        <div id='n3'>
                <center>
                        <div id='n2'>
                        <img id='ii'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZShG7mXPo_USou8CxU7zi3mXxFC0vJg-kcz0Iy9l0Y4Gm7welQgbTu6gJBO01LP01uo&usqp=CAU'/>
                            </div>
                        <div id='n2'>
                            <br /><br /><br /><br />
                        <h1><b>Security and Transparency:</b></h1> 
                        <p>Ensuring the safety of our clients' funds and maintaining transparency in our operations are our utmost priorities. We adhere to strict regulatory standards and implement robust security measures to safeguard our clients' interests.</p>
                        </div>
                        </center>
            </div>
            <div>
        <center> <h1 id='hee'>About<span id='color2'> us    </span></h1>
        <p className='para1'>Discover early user’s feedback on<span className='color1'> Dico integration within <br />
        their workflows.</span></p></center>
        </div>
       
       
        <div className='s1'></div>
        <div className='section'><h2 id='head'>Your premier destination for <br />
        forex trading excellence! <br /> At<span id='color2'> GlobalFXPro    </span></h2></div>
        <div className='section'>
            <p>
            A dynamic and innovative forex trading
            company that aims to empower traders of all
            levels to achieve financial success in the global
            currency markets
            </p>
        </div>

        
       <div>
        <center>       
            <img  id='imgful' src="https://images.ctfassets.net/pdf29us7flmy/3YIRjCRhGuRfSxzwjBws5V/62fa7fe9d4f8030b7b9b8d5ee59641b6/shutterstock_401240461_optimized__1_.jpg?w=720&q=100&fm=jpg" alt="" />
        </center>

       </div>
<br /><br /><br />
       <div className='s1'></div>
        <div className='section'><h2 id='head'>Together we are strong <br /> <span id='color2'> team    </span></h2></div>
        <div className='section'>
            <p>
            Our team of seasoned professionals, equipped
            with years of industry experience, is dedicated
            to providing top-notch trading solutions and
            exceptional customer service to our valued
            clientsx
            </p>
        </div>


        <div>
        <center> <h1 id='hee'>Frequently asked<span id='color2'> questions</span></h1>
        <p className='paraw'>The answers to the frequently asked questions about the <br />
        Forex market are presented in these FAQs:</p></center>
        </div>

        
        
            <div id='qq'>
    <Question/>
    </div>
        <div><center><h2 id='head'>Have more <span id='color2'> questions!    </span></h2></center></div>
        <div><center> <button id='login1'>Call us</button></center></div>
        </div>
    </div>
  )
}

export default Landscape