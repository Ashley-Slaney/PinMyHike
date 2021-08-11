export const Form = () => {
  return (
    <div className="form">
      <textarea id="description" type="text" cols="40" rows="5"
        placeholder="Enter a description of your hike" className="text-field">
      </textarea>
      <button type="submit" className="btn">Submit</button>
    </div>
  )
}

export default Form