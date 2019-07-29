/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export { BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule } from './base.module';
export { TdChartComponent } from './chart.component';
export { TdChartAxisComponent } from './axis/axis.component';
export { TdChartYAxisComponent } from './axis/y-axis.component';
export { TdChartXAxisComponent } from './axis/x-axis.component';
export { TdDatasetComponent } from './dataset/dataset.component';
export { TdChartOptionsService, CHART_PROVIDER } from './chart-options.service';
export { assignDefined, registerTheme, registerDefaultThemes, getThemes } from './utils';
export { TdSeriesComponent } from './series/series.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrRUFBYyxlQUFlLENBQUM7QUFDOUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLCtFQUFjLFNBQVMsQ0FBQztBQWlEeEIsa0NBQWMsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Jhc2UubW9kdWxlJztcbmV4cG9ydCB7IFRkQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy9heGlzLmNvbXBvbmVudCc7XG5leHBvcnQgeyBUZENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveS1heGlzLmNvbXBvbmVudCc7XG5leHBvcnQgeyBUZENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveC1heGlzLmNvbXBvbmVudCc7XG5leHBvcnQgeyBUZERhdGFzZXRDb21wb25lbnQgfSBmcm9tICcuL2RhdGFzZXQvZGF0YXNldC5jb21wb25lbnQnO1xuZXhwb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHtcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkTmFtZVRleHRTdHlsZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRZQXhpc1Bvc2l0aW9uLFxuICBUZFhBeGlzUG9zaXRpb24sXG4gIFRkTmFtZUxvY2F0aW9uLFxuICBUZEF4aXNUeXBlLFxuICBJVGRYQXhpc0NvbmZpZyxcbiAgSVRkWUF4aXNDb25maWcsXG59IGZyb20gJy4vYXhpcy9heGlzLmludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gIElUZEFuaW1hdGlvbixcbiAgSVRkU2hhZG93LFxuICBUZEFsaWduLFxuICBUZEZvbnRTdHlsZSxcbiAgVGRGb250V2VpZ2h0LFxuICBUZFZlcnRpY2FsQWxpZ24sXG4gIFRkUG9pbnRlclR5cGUsXG4gIFRkU3RhdHVzLFxuICBUZExpbmVUeXBlLFxuICBUZFRvb2x0aXBUcmlnZ2VyLFxuICBUZExhYmVsUG9zaXRpb24sXG4gIFRkQXhpc1BvaW50ZXJUeXBlLFxuICBUZFRvb2x0aXBUcmlnZ2VyT24sXG4gIElUZExpbmVTdHlsZSxcbiAgVGRBcmVhT3JpZ2luLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgVGRUb29sdGlwUG9zaXRpb24sXG4gIElUZFRvb2x0aXAsXG4gIElUZFRleHRTdHlsZSxcbiAgVGRMaW5lTGFiZWxQb3NpdGlvbixcbiAgSVRkTGluZUN1cnZlU3R5bGUsXG4gIElUZExhYmVsLFxuICBJVGRBeGlzUG9pbnRlckxhYmVsLFxuICBJVGRCYXNlU3R5bGUsXG4gIElUZFRvb2x0aXBBeGlzUG9pbnRlcixcbiAgVGRBeGlzUG9pbnRlckF4aXMsXG4gIElUZEVkZ2VMYWJlbCxcbiAgVGRUZXh0UG9zaXRpb24sXG4gIFRkVGV4dEFsaWduLFxufSBmcm9tICcuL2Jhc2UudHlwZXMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50JztcbmV4cG9ydCB7XG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkQXJlYVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkTWFya1BvaW50LFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkTGluZUxhYmVsLFxuICBJVGRNYXJrTGluZUVtcGhhc2lzLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICBJVGRNYXJrQXJlYUVtcGhhc2lzLFxufSBmcm9tICcuL3Nlcmllcy9zZXJpZXMuaW50ZXJmYWNlJztcbiJdfQ==