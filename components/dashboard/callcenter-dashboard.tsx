'use client'

import { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Phone, CheckCircle, Clock, DollarSign, Star, FileCheck, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

export default function CallcenterDashboard() {
    const [timeFrame, setTimeFrame] = useState<'week' | 'month'>('week')

    // Datos de ejemplo
    const weeklyData = {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
            {
                label: 'Llamadas',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Avisos',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const monthlyData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                label: 'Llamadas',
                data: [300, 450, 320, 500],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Avisos',
                data: [200, 300, 250, 400],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const clientRatingData = {
        week: {
            labels: ['Positiva', 'Negativa'],
            datasets: [{ data: [75, 25], backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'] }],
        },
        month: {
            labels: ['Positiva', 'Negativa'],
            datasets: [{ data: [80, 20], backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'] }],
        },
    }

    const avisosFinalizadosData = {
        week: {
            labels: ['Con seguimiento', 'Sin seguimiento'],
            datasets: [{ data: [80, 20], backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'] }],
        },
        month: {
            labels: ['Con seguimiento', 'Sin seguimiento'],
            datasets: [{ data: [85, 15], backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'] }],
        },
    }

    const electrodomesticosData = {
        week: {
            labels: ['Nevera', 'Lavadora', 'Lavavajillas', 'Horno', 'Vitrocerámica', 'Aire Acondicionado', 'Calentador', 'Secadora', 'Congelador', 'Campana Extractora'],
            datasets: [{ label: 'Eficiencia en la gestión', data: [95, 90, 88, 85, 82, 80, 78, 75, 72, 70], backgroundColor: 'rgba(75, 192, 192, 0.6)' }],
        },
        month: {
            labels: ['Nevera', 'Lavadora', 'Lavavajillas', 'Horno', 'Vitrocerámica', 'Aire Acondicionado', 'Calentador', 'Secadora', 'Congelador', 'Campana Extractora'],
            datasets: [{ label: 'Eficiencia en la gestión', data: [97, 92, 89, 87, 84, 82, 80, 77, 75, 73], backgroundColor: 'rgba(75, 192, 192, 0.6)' }],
        },
    }

    const metricsData: { [key in 'week' | 'month']: { llamadas: { value: number; change: string }; avisos: { value: number; change: string }; duracion: { value: string; change: string }; revenue: { value: string; change: string } } } = {
        week: {
            llamadas: { value: 245, change: '+20%' },
            avisos: { value: 189, change: '+15%' },
            duracion: { value: '5m 32s', change: '-2%' },
            revenue: { value: '$1,234', change: '+10%' },
        },
        month: {
            llamadas: { value: 1050, change: '+15%' },
            avisos: { value: 820, change: '+12%' },
            duracion: { value: '5m 45s', change: '+1%' },
            revenue: { value: '$5,678', change: '+8%' },
        },
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard Callcenter</h1>
                <Select value={timeFrame} onValueChange={(value) => setTimeFrame(value as 'week' | 'month')}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Seleccionar período" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="week">Esta semana</SelectItem>
                        <SelectItem value="month">Este mes</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Llamadas Descolgadas</CardTitle>
                        <Phone className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metricsData[timeFrame].llamadas.value}</div>
                        <p className="text-xs text-muted-foreground">{metricsData[timeFrame].llamadas.change} que el período anterior</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avisos Creados</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metricsData[timeFrame].avisos.value}</div>
                        <p className="text-xs text-muted-foreground">{metricsData[timeFrame].avisos.change} que el período anterior</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Media Duración Llamadas</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metricsData[timeFrame].duracion.value}</div>
                        <p className="text-xs text-muted-foreground">{metricsData[timeFrame].duracion.change} que el período anterior</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metricsData[timeFrame].revenue.value}</div>
                        <p className="text-xs text-muted-foreground">{metricsData[timeFrame].revenue.change} que el período anterior</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Star className="mr-2 h-4 w-4" />
                            Valoración de Clientes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px]">
                            <Pie data={clientRatingData[timeFrame]} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span>Valoración Positiva</span>
                                <span className="font-bold">{clientRatingData[timeFrame].datasets[0].data[0]}%</span>
                            </div>
                            <Progress value={clientRatingData[timeFrame].datasets[0].data[0]} className="mt-2" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <FileCheck className="mr-2 h-4 w-4" />
                            Avisos Finalizados
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px]">
                            <Pie data={avisosFinalizadosData[timeFrame]} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span>Con Seguimiento</span>
                                <span className="font-bold">{avisosFinalizadosData[timeFrame].datasets[0].data[0]}%</span>
                            </div>
                            <Progress value={avisosFinalizadosData[timeFrame].datasets[0].data[0]} className="mt-2" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            Rendimiento por Tipo de Electrodoméstico
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px]">
                            <Bar
                                data={electrodomesticosData[timeFrame]}
                                options={{
                                    indexAxis: 'y',
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                    },
                                    scales: {
                                        x: {
                                            beginAtZero: true,
                                            max: 100,
                                            title: {
                                                display: true,
                                                text: 'Eficiencia en la gestión (%)'
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Rendimiento {timeFrame === 'week' ? 'Semanal' : 'Mensual'}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {timeFrame === 'week' ? (
                            <Line data={weeklyData} />
                        ) : (
                            <Bar data={monthlyData} />
                        )}
                    </CardContent>
                </Card>
            </div>


            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Últimas Llamadas</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Duración</TableHead>
                                <TableHead>Resultado</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead>Valoración</TableHead>
                                <TableHead>Seguimiento</TableHead>
                                <TableHead>Electrodoméstico</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>2023-10-31 15:23</TableCell>
                                <TableCell>4m 12s</TableCell>
                                <TableCell>Aviso Creado</TableCell>
                                <TableCell>$45</TableCell>
                                <TableCell>Positiva</TableCell>
                                <TableCell>Realizado</TableCell>
                                <TableCell>Nevera</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2023-10-31 14:56</TableCell>
                                <TableCell>2m 35s</TableCell>
                                <TableCell>Sin Aviso</TableCell>
                                <TableCell>$0</TableCell>
                                <TableCell>Negativa</TableCell>
                                <TableCell>N/A</TableCell>
                                <TableCell>Lavadora</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2023-10-31  14:30</TableCell>
                                <TableCell>7m 48s</TableCell>
                                <TableCell>Aviso Creado</TableCell>
                                <TableCell>$80</TableCell>
                                <TableCell>Positiva</TableCell>
                                <TableCell>Pendiente</TableCell>
                                <TableCell>Aire Acondicionado</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}