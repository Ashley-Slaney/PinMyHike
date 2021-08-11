export const Form = () => {
  return (
    <div className="form">
      <input type="text" name="location" id="location" value="53.374378, -1.711401"/>
      <br />
      <textarea id="description" type="text" cols="40" rows="5"
        placeholder="Enter a description of your hike" className="text-field">
      </textarea>
      <br />
      <label htmlFor="photo">Upload a photo </label>
      <input id="photo" type="file" accept="image/png, image/jpeg" />
      <br />
      <button type="submit" className="btn">Submit</button>
    </div>
  )
}

export default Form