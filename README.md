# Linkbee

Linkbee is a statically generated page with a design initially adapted
from [LinkFree](https://github.com/MichaelBarney/LinkFree). The user
information is specified in `gatsby-config.js` and the links are
currently retreived from a menu that is managed in
[Wings](https://docs.wings.dev/).

## Configuration

Information for connecting to the Wings API should be specified through
environment variables, for example as follows using a `.env` file.
```
GATSBY_WINGS_APP_KEY=app_key_here
GATSBY_WINGS_PROJECT=project_id_here
GATSBY_WINGS_ENDPOINT=https://api.wings.dev
```

## Running

To run for development use `npm start` and to build use `npm build`.

## License

Copyright (C) 2020  Arjan Adriaanse

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
