// fallsync-api · Express HTTP wrapper around fallsync-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'fallsync', version: '1.0.0' }));

app.post('/log', async (req, res) => {
  try {
    const { log } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof log === 'function' ? await log(req.body) : { error: 'log not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/shortHash', async (req, res) => {
  try {
    const { shortHash } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof shortHash === 'function' ? await shortHash(req.body) : { error: 'shortHash not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderDevice', async (req, res) => {
  try {
    const { renderDevice } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof renderDevice === 'function' ? await renderDevice(req.body) : { error: 'renderDevice not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/escapeHtml', async (req, res) => {
  try {
    const { escapeHtml } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof escapeHtml === 'function' ? await escapeHtml(req.body) : { error: 'escapeHtml not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderDiff', async (req, res) => {
  try {
    const { renderDiff } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof renderDiff === 'function' ? await renderDiff(req.body) : { error: 'renderDiff not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderAll', async (req, res) => {
  try {
    const { renderAll } = await import('@ai-native-solutions/fallsync-sdk');
    const out = typeof renderAll === 'function' ? await renderAll(req.body) : { error: 'renderAll not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('fallsync-api listening on :' + PORT));
