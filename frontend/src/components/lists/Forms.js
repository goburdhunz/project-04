import React from 'react'
import Tooltip from 'react-simple-tooltip'

const Forms = ({firstname,lastname, location,image, jobtitle, summary, jobsector, newstopic, eventtype, onChange, onChange2, onSubmit}) => {
  return (
    <section className="section formbox has-background-light">
      <div className="containers formcontainer">
        <form onSubmit={onSubmit}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    onChange={onChange}
                    defaultValue={firstname || ''}
                    name="first_name"
                    placeholder="e.g 'John'"/>
                </p>
              </div>

              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="text" onChange={onChange} defaultValue={lastname || ''} name="last_name" placeholder="e.g 'Smith'"/>
                </p>
              </div>
              <div className="field-label is-normal">
                <label className="label">Location</label>
              </div>
              <div className="field">
                <p className="control is-expanded">
                  <input className="input is-success" type="text" onChange={onChange} name="location" defaultValue={location || ''} placeholder="e.g London"/>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Image URL</label>
            </div>
            <div className="field-body">
              <div className="field is-expanded">
                <p className="control is-expanded">
                  <input className="input is-success" type="text" onChange={onChange} name="image" defaultValue={image || ''} placeholder="e.g Software Engineer"/>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Jobtitle</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <p className="control is-expanded">
                  <input className="input is-success" type="text" onChange={onChange} name="job_title" defaultValue={jobtitle || ''} placeholder="e.g Software Engineer"/>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal eventeditlist">
            <div className="field-label is-normal">
              <label className="label">Event type</label>
            </div>
            <label className="checkbox">
              <input
                id='7' checked={this.checkForIngredient('Beef') || false}
                onChange={this.handleIngredientCheckbox} type="checkbox"
              />
              Big Data
            </label>
            <label className="checkbox">
              <input id='6' type="checkbox"/>
              Social
            </label>
            <label className="checkbox">
              <input id='5' type="checkbox"/>
              Finance
            </label>
            <label className="checkbox">
              <input id='4' type="checkbox"/>
              Language
            </label>
            <label className="checkbox">
              <input id='3' type="checkbox"/>
              Charity
            </label>
            <label className="checkbox">
              <input id='2' type="checkbox"/>
            Networking
            </label>
            <label className="checkbox">
              <input id='1' type="checkbox"/>
              Tech
            </label>
          </div>

          <div className="field is-horizontal jobeditlist">
            <div className="field-label is-normal">
              <label className="label">Job Sectors</label>
            </div>
            <label className="checkbox">
              <input id='1' onChange={onChange2}type="checkbox"/>
              Consulting
            </label>
            <label className="checkbox">
              <input id='2' type="checkbox"/>
              Human Resources
            </label>
            <label className="checkbox">
              <input id='3' type="checkbox"/>
              Public Relations
            </label>
            <label className="checkbox">
              <input id='4' type="checkbox"/>
              Marketing
            </label>
            <label className="checkbox">
              <input id='5' type="checkbox"/>
              Finance
            </label>
            <label className="checkbox">
              <input id='6' type="checkbox"/>
            Tech
            </label>
            <label className="checkbox">
              <input id='7' type="checkbox"/>
              Advertising
            </label>
          </div>

          <div className="field is-horizontal newseditlist">
            <div className="field-label is-normal">
              <label className="label">News topics</label>
            </div>
            <label className="checkbox ">
              <input id='1' type="checkbox"/>
              Science
            </label>
            <label className="checkbox">
              <input id='2' type="checkbox"/>
              Politics
            </label>
            <label className="checkbox">
              <input id='3' type="checkbox"/>
              Environment
            </label>
            <label className="checkbox">
              <input id='4' type="checkbox"/>
              Advertising
            </label>
            <label className="checkbox">
              <input id='5' type="checkbox"/>
              Finance
            </label>
            <label className="checkbox">
              <input id='6' type="checkbox"/>
            Tech
            </label>
            <label className="checkbox">
              <input id='7' type="checkbox"/>
              Education
            </label>
          </div>


          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Summary</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input is-danger" onChange={onChange} name="summary" defaultValue={summary || ''} type="text" placeholder="e.g. Partnership opportunity"/>
                </div>
              </div>
            </div>
          </div>


          <div className="field is-horizontal">
            <div className="field-label">

            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Forms
