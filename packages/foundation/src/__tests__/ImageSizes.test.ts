import ImageSizes from "../ImageSizes"

test('snapshot of image sizes', () => {
    expect(ImageSizes).toMatchSnapshot()
})