// tslint:disable-next-line:no-implicit-dependencies
import { fileTreeMatcherFactories } from '@typescript-plus/jasmine-file-tree-matcher';
import * as path from 'path';
// tslint:disable-next-line:no-implicit-dependencies
import * as tmp from 'tmp';
import { main } from '../../src/commands/repoplate';

tmp.setGracefulCleanup();

const TEST_DIR = path.join(__dirname, 'a_sample_hello_project');
const TEMPLATE_DIR = path.join(TEST_DIR, 'template');
const EXPECTED_DIR = path.join(TEST_DIR, 'expected');
const TMP_DIR = tmp.dirSync().name;

describe(__filename, () => {
  beforeEach(() => {
    jasmine.addMatchers(fileTreeMatcherFactories);
  });

  it('works.', () => {
    const actualDir = path.join(TMP_DIR, 'actual');
    main([TEMPLATE_DIR, actualDir, '{"greeting": "hello"}']);
    expect(actualDir).toHaveFiles(EXPECTED_DIR);
  });
});
