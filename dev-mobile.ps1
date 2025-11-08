# Script para iniciar o servidor e mostrar o IP para teste mobile

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  BONA MAMA - Teste Mobile" -ForegroundColor Yellow
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Obtém o IP local
$ipAddress = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -First 1).IPAddress

if ($ipAddress) {
    Write-Host "📱 Acesse no celular:" -ForegroundColor Green
    Write-Host "   http://$ipAddress:3000" -ForegroundColor White -BackgroundColor DarkGreen
    Write-Host ""
    Write-Host "💡 Certifique-se de estar na MESMA rede WiFi!" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "⚠️  Não foi possível detectar o IP. Use 'ipconfig' para encontrar." -ForegroundColor Red
    Write-Host ""
}

Write-Host "🚀 Iniciando servidor..." -ForegroundColor Cyan
Write-Host ""

# Inicia o servidor
pnpm dev:mobile
