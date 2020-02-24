const { buildQuery } = require('../src/util/functions');

describe('Util functions should work as expected:', () => {
  it('Build query function:', () => {
    const params = {
      s: 'string',
      u: undefined,
      num: 2,
      n: null,
    };
    const result = 's=string&num=2';
    expect(buildQuery(params)).toEqual(result);
  });
});
