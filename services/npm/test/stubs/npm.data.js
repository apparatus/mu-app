module.exports = {
  '_id': 'example',
  '_rev': '3-1a2d436a902cdfaa820f4da8aeeeb4f1',
  'name': 'example-module',
  'description': 'Example',
  'dist-tags': {
    'latest': '0.0.1'
  },
  'versions': {
    '0.0.1': {
      'name': 'example-module',
      'description': 'Entity plugin for seneca',
      'keywords': [
        'seneca',
        'plugin'
      ],
      'version': '0.0.1',
      'license': 'MIT',
      'homepage': 'http://senecajs.org',
      'author': {
        'name': 'Richard Rodger',
        'url': 'http://richardrodger.com/'
      },
      'dependencies': {
        'eraro': '0.4.1',
        'jsonic': '0.2.2',
        'lodash': '4.0.1'
      },
      'main': 'entity.js',
      'engines': {
        'node': '>=0.10.0'
      },
      'files': [
        'LICENSE',
        'README.md',
        'lib',
        'entity.js'
      ],
      'repository': {
        'type': 'git',
        'url': 'git+https://github.com/senecajs/example-module.git'
      },
      'scripts': {
        'test': 'lab -v -P test -L -t 80',
        'test-html': 'lab -v -P test -L -t 80 -r html > testcov.html',
        'lint': 'lab -P test -dL'
      },
      'devDependencies': {
        'code': '1.5.0',
        'eslint-config-seneca': '1.1.2',
        'eslint-plugin-standard': '1.3.1',
        'joi': '6.10.x',
        'lab': '6.2.x'
      },
      'gitHead': '61371232af57ee37c573cfc114096088def6f478',
      'bugs': {
        'url': 'https://github.com/senecajs/example-module/issues'
      },
      '_id': 'example-module@0.0.1',
      '_shasum': '184d2251666938639364256836e6d16db2f8f729',
      '_from': '.',
      '_npmVersion': '3.3.12',
      '_nodeVersion': '5.4.1',
      '_npmUser': {
        'name': 'wyatt',
        'email': 'wpreul@gmail.com'
      },
      'dist': {
        'shasum': '184d2251666938639364256836e6d16db2f8f729',
        'tarball': 'https://registry.npmjs.org/example-module/-/example-module-0.0.1.tgz'
      },
      'maintainers': [
        {
          'name': 'wyatt',
          'email': 'wpreul@gmail.com'
        }
      ],
      '_npmOperationalInternal': {
        'host': 'packages-5-east.internal.npmjs.com',
        'tmp': 'tmp/example-module-0.0.1.tgz_1455650942742_0.4798124579247087'
      },
      'directories': {}
    }
  },
  'readme': '# example-module\nEntity plugin for seneca\n',
  'maintainers': [
    {
      'name': 'rjrodger',
      'email': 'richard.rodger@nearform.com'
    },
    {
      'name': 'wyatt',
      'email': 'wpreul@gmail.com'
    }
  ],
  'time': {
    'modified': '2016-03-07T21:07:05.021Z',
    'created': '2016-02-16T18:49:09.329Z',
    '0.0.0': '2016-02-16T18:49:09.329Z',
    '0.0.1': '2016-02-16T19:29:05.114Z'
  },
  'homepage': 'http://senecajs.org',
  'keywords': [
    'seneca',
    'plugin'
  ],
  'repository': {
    'type': 'git',
    'url': 'git+https://github.com/senecajs/example-module.git'
  },
  'author': {
    'name': 'Richard Rodger',
    'url': 'http://richardrodger.com/'
  },
  'bugs': {
    'url': 'https://github.com/senecajs/example-module/issues'
  },
  'license': 'MIT'
}
