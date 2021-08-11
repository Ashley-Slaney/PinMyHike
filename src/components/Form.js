export const Form = ({ location }) => {
  return (
    <div className="form">
      <input type="text" name="location" id="location" value={location} />
      <br />
      <textarea id="description" type="text" cols="40" rows="5"
        placeholder="Enter a description of your hike" className="text-field">
      </textarea>
      <br />
      <label htmlFor="photo">Upload a photo</label>
      <input id="photo" className="btn" type="file" accept="image/png, image/jpeg" />
      <br />
      <button type="submit" className="btn">Submit</button>
    </div>
  )
}

export default Form