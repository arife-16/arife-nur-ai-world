import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

function entropy(p: number) {
  const clamp = Math.min(1, Math.max(0, p));
  if (clamp === 0 || clamp === 1) return 0;
  return -(clamp * Math.log2(clamp) + (1 - clamp) * Math.log2(1 - clamp));
}

const EntropyViz = () => {
  const [p, setP] = useState(1);

  const data = useMemo(() => {
    const points: { p: number; H: number }[] = [];
    const step = 0.02; // 51 points
    for (let x = 0; x <= 1 + 1e-9; x += step) {
      const px = Math.min(1, Math.max(0, Number(x.toFixed(2))));
      points.push({ p: px, H: entropy(px) });
    }
    return points;
  }, []);

  const currentEntropy = entropy(p);

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Binary Entropy Function</h2>
        <p className="text-muted-foreground">
          The binary entropy function H(p) measures uncertainty of a Bernoulli
          variable. It reaches its maximum at p = 0.5 and decreases toward the
          extremes (0 or 1).
        </p>
      </div>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="p"
              type="number"
              domain={[0, 1]}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              label={{ value: "Probability (p)", position: "bottom", fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              type="number"
              domain={[0, 1]}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              label={{ value: "H(p)", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip formatter={(value) => (typeof value === "number" ? value.toFixed(3) : value)} />
            <ReferenceLine x={1} stroke="hsl(var(--destructive))" strokeDasharray="4 4" />
            <Line type="monotone" dataKey="H" stroke="#3b82f6" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">p = {p.toFixed(3)}</span>
        <span className="text-foreground">H(p) = {currentEntropy.toFixed(3)}</span>
      </div>

      <input
        type="range"
        min={0}
        max={1000}
        value={Math.round(p * 1000)}
        onChange={(e) => setP(Number(e.target.value) / 1000)}
        className="w-full accent-primary"
      />
    </div>
  );
};

export default EntropyViz;