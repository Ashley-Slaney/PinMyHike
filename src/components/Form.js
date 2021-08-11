export const Form = () => {
  return (
    <div className="form">
      <textarea id="description" type="text" cols="40" rows="5"
        placeholder="Enter a description of your hike" className="text-field">
      </textarea>
      <label htmlFor="photo">Upload a photo</label>
      <input id="photo" type="file" accept="image/png, image/jpeg" />
      <button type="submit" className="btn">Submit</button>
    </div>
  )
}

export default Form