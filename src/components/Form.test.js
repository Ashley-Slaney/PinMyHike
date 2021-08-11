import renderer from 'react-test-renderer'
import Form from './Form'

// it('renders correctly when there are no props', () => {
//   const tree = renderer.create(<Form />).toJSON()
//   expect(tree).toMatchSnapshot()
// })

it('renders correctly when there is a location', () => {
  const location = ["53.374378, -1.711401"]
  const tree = renderer.create(<Form />).toJSON()
  expect(tree).toMatchSnapshot()
})
