import {RenderInternals} from '@remotion/renderer';
import {LambdaRoutines} from '../../../defaults';
import {handler} from '../../../functions';
import {LambdaReturnValues} from '../../../shared/return-values';
import {disableLogs, enableLogs} from '../../disable-logs';

jest.setTimeout(30000);

const extraContext = {
	invokedFunctionArn: 'arn:fake',
	getRemainingTimeInMillis: () => 12000,
};

type Await<T> = T extends PromiseLike<infer U> ? U : T;

beforeAll(() => {
	disableLogs();
});

afterAll(async () => {
	enableLogs();

	await RenderInternals.killAllBrowsers();
});

test('Should be able to render to another bucket', async () => {
	process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE = '2048';

	const res = await handler(
		{
			type: LambdaRoutines.start,
			serveUrl: 'https://competent-mccarthy-56f7c9.netlify.app/',
			chromiumOptions: {},
			codec: 'h264-mkv',
			composition: 'react-svg',
			crf: 9,
			envVariables: {},
			frameRange: [0, 12],
			framesPerLambda: 8,
			imageFormat: 'png',
			inputProps: {},
			logLevel: 'warn',
			maxRetries: 3,
			outName: null,
			pixelFormat: 'yuv420p',
			privacy: 'public',
			proResProfile: undefined,
			quality: undefined,
			scale: 1,
			timeoutInMilliseconds: 12000,
		},
		extraContext
	);
	const startRes = res as Await<LambdaReturnValues[LambdaRoutines.start]>;

	const progress = (await handler(
		{
			type: LambdaRoutines.status,
			bucketName: startRes.bucketName,
			renderId: startRes.renderId,
		},
		extraContext
	)) as Await<LambdaReturnValues[LambdaRoutines.status]>;
	expect(progress.errors[0].stack).toContain(
		'Incompatible site: When visiting'
	);
});
