import Test from'../image/test.jpg';
import Card from'../../../layout/card/card';

const cardsInfo = 
[
    { 
      title: 'game one',
      des: 'sssssssssssssssssssssssssssssssssss',
      price: '30',
      img:"Test"
    
    },
 
    { 
      title: 'game one',
      des: 'sssssssssssssssssssssssssssssssssss',
      price: '30',
      img:"Test"
    
    },
 
    { 
      title: 'game one',
      des: 'sssssssssssssssssssssssssssssssssss',
      price: '30',
      img:"Test"
    
    },
 
    { 
      title: 'game one',
      des: 'sssssssssssssssssssssssssssssssssss',
      price: '30',
      img:"Test"
    
    },
 
    { 
      title: 'game two',
      des: 'sssssssssssssssssssssssssssssssssss',
      price: '30',
      img:"Test"
    
    },
 
];

export default function RightSection(){
    return(
        <>
            <section className="col-12 col-lg-8 rounded-4 m-0 p-0">
                <div>
                    <img src={Test} className="card-img rounded-4" style={{ objectFit: 'cover', height : '50vh'}} alt={Test}/>
                    <div className="row p-0 mx-0 mb-0 mt-5 align-items-center w-100">
                        {cardsInfo.map((i)=> (
                            <div className='col-12 col-lg-4 my-3'>
                                <Card 
                                    image={Test} 
                                    title={i.title}
                                    des="assssssssssssssssssss"
                                    price="25"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}