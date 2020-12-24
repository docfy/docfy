import docgen from '../src';
import util from 'util';
import path from 'path';

function inspect(obj: unknown): void {
  console.log(util.inspect(obj, false, 15, true));
}

(async function (): Promise<void> {
  const components = docgen([
    // {
    // root: path.resolve(
    // path.join(__dirname, '../../../../../frontile/packages/core/addon')
    // ),
    // pattern: 'components/**/*.ts'
    // }
    {
      root: path.resolve(
        path.join(__dirname, '../../../../../frontile/packages/overlays/addon')
      ),
      // pattern: 'components/drawer/index.ts'
      pattern: 'components/**/*.ts'
    }
  ]);

  inspect(components);
})();