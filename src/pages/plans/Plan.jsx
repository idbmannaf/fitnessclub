import OtherHeader from '../../component/OtherHeader';
import HeaderImage from '../../images/header_bg_4.jpg';
import { plans } from '../../data'
import Card from '../../Ui/Card';
import './plan.css';
const Plan = () => {
  return (
    <>
      <OtherHeader title="Membership Plans" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, odit perspiciatis provident placeat </OtherHeader>
      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return (
                <Card key={id} className="plan">
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1>
                  <h4>Features</h4>
                  {
                    features.map(({ feature, available }, index) => {
                      return (
                        <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className="btn btn-lg">Choose Plan</button>
                </Card>

              )
            })

          }
        </div>
      </section>
    </>
  )
}

export default Plan