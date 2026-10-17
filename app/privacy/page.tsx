import type { Metadata } from 'next';
import Link from 'next/link';
import { getProfile } from '@/app/composition';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'daichihotta.com と rclone 用 Google OAuth クライアントのプライバシーポリシー',
};

const LAST_UPDATED = '2026-10-17';

export default async function PrivacyPage() {
  const profile = await getProfile.execute();
  const mail = (
    <a
      href={`mailto:${profile.email}`}
      className="text-zinc-900 underline underline-offset-4 hover:opacity-70"
    >
      {profile.email}
    </a>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <main className="max-w-2xl mx-auto px-6 py-24 md:py-32">
        <Link
          href="/"
          className="text-sm text-zinc-600 underline underline-offset-4 hover:opacity-70"
        >
          トップに戻る
        </Link>

        <section lang="ja" className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Privacy</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">プライバシーポリシー</h1>
          <p className="mt-4 font-mono text-xs text-zinc-500">最終更新日: {LAST_UPDATED}</p>

          <h2 className="mt-12 text-xl font-semibold">このサイトについて</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            このサイトは静的なポートフォリオです。Cookie・アクセス解析・入力フォームは使っておらず、訪問者の個人情報を集めません。ホスティング事業者（Cloudflare）が通常のアクセスログを記録することはあります。
          </p>

          <h2 className="mt-12 text-xl font-semibold">rclone 用の Google OAuth クライアント</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-700 leading-relaxed">
            <li>
              Google の OAuth アプリ「rclone」は、サイト運営者本人が自分の Google ドライブにアクセスするためだけに使います。ほかの人には提供していません。
            </li>
            <li>
              Google ドライブのデータにアクセスするのは、本人の端末で動く rclone だけです。データをサーバーに送ったり保存したりはせず、第三者とも共有しません。
            </li>
            <li>認証のトークンは、本人の端末にある rclone の設定ファイルにだけ保存されます。</li>
            <li>
              Google API から受け取る情報は、Google API Services User Data Policy（Limited Use の要件を含む）に従って扱います。
            </li>
          </ul>

          <h2 className="mt-12 text-xl font-semibold">お問い合わせ</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">{mail}</p>
        </section>

        <section lang="en" className="mt-24 pt-12 border-t border-zinc-200">
          <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 font-mono text-xs text-zinc-500">Last updated: {LAST_UPDATED}</p>

          <h2 className="mt-12 text-xl font-semibold">This website</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            This is a static portfolio site. It uses no cookies, analytics or forms, and it does not collect personal information from visitors. The hosting provider (Cloudflare) may keep standard access logs.
          </p>

          <h2 className="mt-12 text-xl font-semibold">Google OAuth client for rclone</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-700 leading-relaxed">
            <li>
              The Google OAuth app &quot;rclone&quot; is used only by the site owner to access the owner&apos;s own Google Drive. It is not offered to anyone else.
            </li>
            <li>
              Google Drive data is accessed only by rclone running on the owner&apos;s own machine. No data is sent to or stored on a server, and nothing is shared with third parties.
            </li>
            <li>Authorization tokens are stored only in the rclone configuration file on the owner&apos;s machine.</li>
            <li>
              Use of information received from Google APIs follows the Google API Services User Data Policy, including the Limited Use requirements.
            </li>
          </ul>

          <h2 className="mt-12 text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">{mail}</p>
        </section>
      </main>
    </div>
  );
}
