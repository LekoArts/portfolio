// Get the complete text of a content type with slices (e.g. you can get the wordcount, estimate the reading time etc.)

const fullText = n =>
  n.node.data.body.map(slice => {
    if (slice.slice_type === 'text') {
      return slice.primary.text.text;
    }
    return null;
  });

export default fullText;
