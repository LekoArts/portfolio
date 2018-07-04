const fullText = input =>
  input.data.body.map(slice => {
    if (slice.slice_type === 'text') {
      return slice.primary.text.text;
    }
    if (slice.slice_type === 'code_block') {
      return slice.primary.code_block.text;
    }
    if (slice.slice_type === 'quote') {
      return slice.primary.quote.text;
    }
    return null;
  });

module.exports = fullText;
