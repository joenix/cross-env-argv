module.exports = (

	process,

	group = process.argv.slice(2),

	dismiss = ( context, item = {} ) => {

		context.replace(

			/^([\w\.\-\:\/]+)\=?(.*)/g,

			( word, $1, $2 ) => {

				item[ $1 ] = $2 || true;

				return word;

			}

		);

		return item;

	},

	argv = {}

) => {

	group.map(

		( context ) => {

			Object.assign( argv, dismiss( context ) );

		}

	);

	return argv;

}
